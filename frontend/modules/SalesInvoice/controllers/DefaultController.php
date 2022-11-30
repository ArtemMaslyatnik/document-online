<?php

namespace frontend\modules\SalesInvoice\controllers;

use Yii;
use yii\web\Controller;
use yii\data\ActiveDataProvider;
use frontend\modules\SalesInvoice\models\forms\SalesInvoiceForm;
use frontend\modules\SalesInvoice\models\SalesInvoiceProduct;
use frontend\modules\SalesInvoice\models\SalesInvoice;
use yii\filters\VerbFilter;
/**
 * Default controller for the `SalesInvoice` module
 */
class DefaultController extends Controller {

    public $_1_2;
    public $_1_19;
    public $des;
    public $hang;
    public $namecurr;
    public $nametho;
    public $namemil;
    public $namemrd;
    
    
      /**
     * @inheritDoc
     */
    public function behaviors() {
        return array_merge(
                parent::behaviors(),
                [
                    'verbs' => [
                        'class' => VerbFilter::className(),
                        'actions' => [
                            'delete' => ['POST'],
                        ],
                    ],
                ]
        );
    }
    /**
     * Renders the index view for the module
     * @return string
     */
    public function actionIndex() {
        
        $dataProvider = new ActiveDataProvider([
            'query' => SalesInvoice::find(),
            /*
            'pagination' => [
                'pageSize' => 50
            ],
            'sort' => [
                'defaultOrder' => [
                    'id' => SORT_DESC,
                ]
            ],
            */
        ]);

        return $this->render('index', [
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionCreate() {
        $sum = 0;
        $model = new SalesInvoiceForm(Yii::$app->user);
        $modelsSIP = [new SalesInvoiceProduct()];
        $view = 'create';
        if ($this->request->isPost && $model->load(Yii::$app->request->post())) {
            $this->addModels($modelsSIP);
            if (SalesInvoiceProduct::loadMultiple($modelsSIP, Yii::$app->request->post()) &&
                    SalesInvoiceProduct::validateMultiple($modelsSIP))  {
                $this->SaveSIP($model, $modelsSIP);
            }
        }

        return $this->render($view, [
                    'model' => $model,
                    'modelsSIP' => $modelsSIP,
                    'sum' => $sum
        ]);
    }

    public function addModels(&$modelsSIP) 
    {
        $count = count(Yii::$app->request->post('SalesInvoiceProduct', []));
        for ($i = 1; $i < $count; $i++) {
            $modelsSIP[] = new SalesInvoiceProduct();
        }
    }
 
    private function SaveSIP($model, $modelsSIP) {
        if (Yii::$app->user->isGuest) {
            $sum = $this->getSum($modelsSIP);
            $view = 'view';
                    
            return $this->render($view, [
                    'model' => $model,
                    'modelsSIP' => $modelsSIP,
                    'sum' => $sum
        ]);
        }

        $modelSI = $model->save();
        if (isset($modelSI) && $modelSI != false) {
            foreach ($modelsSIP as $modelSIP) {
                $modelSIP->save(false);
                $modelSI->link('salesInvoiceProduct', $modelSIP);
            }
            Yii::$app->session->setFlash('success', 'Resume created!');
            return $this->redirect(['/']);
        }
    }

    private function getSum($modelsIP) {
        $arr = [];
        $sum = 0;
        $value =0;
        foreach ($modelsIP as $value => $model) {
          $sum +=  (float)$model->amountTotal;
        }
        $sum = round($sum, 2);
        $vat = round($sum / 100 * 20, 2);
        $total = $sum + $vat; 
        $arr['sum'] = $nombre_format_francais = number_format($sum, 2, '.', '');
        $arr['vat'] = $nombre_format_francais = number_format($vat, 2, '.', '');
        $arr['total'] = $nombre_format_francais = number_format($total, 2, '.', '');
        $arr['countLineProductTotal'] = $value+1; 
        $arr['num2text'] = $this->num2text_ua($arr['total']);
        $arr['numVAT2text'] = $this->num2text_ua($arr['vat']);
        return $arr;
    }
    
    public function num2text_ua($num) {
        $num = trim(preg_replace('~s+~s', '', $num)); // отсекаем пробелы
        if (preg_match("/, /", $num)) {
            $num = preg_replace("/, /", ".", $num);
        } // преобразует запятую
        if (is_numeric($num)) {
            //++Лыков
            //$num = round($num, 2); // Округляем до сотых (копеек)
            //--Лыков
            $num_arr = explode(".", $num);
            $amount = $num_arr[0]; // переназначаем для удобства, $amount - сумма без копеек
            if (strlen($amount) <= 3) {
                $res = implode(" ", $this->Triada($amount)) . $this->Currency($amount);
            } else {
                $amount1 = $amount;
                while (strlen($amount1) >= 3) {
                    $temp_arr[] = substr($amount1, -3); // засовываем в массив по 3
                    $amount1 = substr($amount1, 0, -3); // уменьшаем массив на 3 с конца
                }
                if ($amount1 != '') {
                    $temp_arr[] = $amount1;
                } // добавляем то, что не добавилось по 3
                $i = 0;
                foreach ($temp_arr as $temp_var) { // переводим числа в буквы по 3 в массиве
                    $i++;
                    if ($i == 3 || $i == 4) { // миллионы и миллиарды мужского рода, а больше миллирда вам все равно не заплатят
                        if ($temp_var == '000') {

                            $temp_res[] = '';
                        } else {
                            $temp_res[] = implode(" ", $this->Triada($temp_var, 1)) . $this->GetNum($i, $temp_var);
                        } # if
                    } else {
                        if ($temp_var == '000') {
                            $temp_res[] = '';
                        } else {
                            $temp_res[] = implode(" ", $this->Triada($temp_var)) . $this->GetNum($i, $temp_var);
                        } # if
                    } # else
                } # foreach
                $temp_res = array_reverse($temp_res); // разворачиваем массив
                $res = implode(" ", $temp_res) . $this->Currency($amount);
            }
            if (!isset($num_arr[1]) || $num_arr[1] == '') {
                $num_arr[1] = '00';
            }
            return $res . ', ' . $num_arr[1] . ' коп.';
        } # if
    }
    
    public function Triada($amount, $case = null) {
        //global $_1_2, $_1_19, $des, $hang; // объявляем массив переменных
        $this->_1_2[1] = "один";
        $this->_1_2[2] = "два";

        $this->_1_19[1] = "одна";
        $this->_1_19[2] = "дві";
        $this->_1_19[3] = "три";
        $this->_1_19[4] = "чотири";
        $this->_1_19[5] = "п'ять";
        $this->_1_19[6] = "шість";
        $this->_1_19[7] = "сім";
        $this->_1_19[8] = "вісім";
        $this->_1_19[9] = "дев'ять";
        $this->_1_19[10] = "десять";

        $this->_1_19[11] = "одинадцять";
        $this->_1_19[12] = "дванадцять";
        $this->_1_19[13] = "тринадцять";
        $this->_1_19[14] = "чотирнадцять";
        $this->_1_19[15] = "п'ятнадцять";
        $this->_1_19[16] = "шістнадцять";
        $this->_1_19[17] = "сімнадцять";
        $this->_1_19[18] = "вісімнадцять";
        $this->_1_19[19] = "дев'ятнадцять";


        $this->des[2] = "двадцять";
        $this->des[3] = "тридцять";
        $this->des[4] = "сорок";
        $this->des[5] = "п'ятдесят";
        $this->des[6] = "шістдесят";
        $this->des[7] = "сімдесят";
        $this->des[8] = "вісімдесят";
        $this->des[9] = "дев'яносто";

        $this->hang[1] = "сто";
        $this->hang[2] = "двісті";
        $this->hang[3] = "триста";
        $this->hang[4] = "чотириста";
        $this->hang[5] = "п'ятсот";
        $this->hang[6] = "шістсот";
        $this->hang[7] = "сімсот";
        $this->hang[8] = "вісімсот";
        $count = strlen($amount);
        for ($i = 0; $i < $count; $i++) {
            $triada[] = substr($amount, $i, 1);
        }
        $triada = array_reverse($triada); // разворачиваем массив для операций
        if (isset($triada[1]) && $triada[1] == 1) { // строго для 10-19
            $triada[0] = $triada[1] . $triada[0]; // Объединяем в единицы
            $triada[1] = ''; // убиваем десятки
            $triada[0] = $this->_1_19[$triada[0]]; // присваиваем
        } else { // а дальше по обычной схеме
            if (isset($case) && ($triada[0] == 1 || $triada[0] == 2)) { // если требуется м.р.
                $triada[0] = $this->_1_2[$triada[0]]; // единицы, массив мужского рода
            } else {
                if ($triada[0] != 0) {
                    $triada[0] = $this->_1_19[$triada[0]];
                } else {
                    $triada[0] = '';
                } // единицы
            } # if
            if (isset($triada[1]) && $triada[1] != 0) {
                $triada[1] = $this->des[$triada[1]];
            } else {
                $triada[1] = '';
            } // десятки
        }
        if (isset($triada[2]) && $triada[2] != 0) {
            $triada[2] = $this->hang[$triada[2]];
        } else {
            $triada[2] = '';
        } // сотни
        $triada = array_reverse($triada); // разворачиваем массив для вывода
        foreach ($triada as $triada_) { // вычищаем массив от пустых значений
            if ($triada_ != '') {
                $triada1[] = $triada_;
            }
        } # foreach
        return $triada;
    }

    public function Currency($amount) {
        //global $namecurr; // объявляем масиив переменных
        $this->namecurr[1] = "гривня"; // 1
        $this->namecurr[2] = "гривні"; // 2, 3, 4
        $this->namecurr[3] = "гривень"; // >4
        
        $last2 = substr($amount, -2); // последние 2 цифры
        $last1 = substr($amount, -1); // последняя 1 цифра
        $last3 = substr($amount, -3); //последние 3 цифры
        if ((strlen($amount) != 1 && substr($last2, 0, 1) == 1) || $last1 >= 5 || $last3 == '000') {
            $curr = $this->namecurr[3];
        } // от 10 до 19
        else if ($last1 == 1) {
            $curr = $this->namecurr[1];
        } // для 1-цы
        else {
            $curr = $this->namecurr[2];
        } // все остальные 2, 3, 4
        return ' ' . $curr;
    }

    public function GetNum($level, $amount) {
        //global $nametho, $namemil, $namemrd; // объявляем массив переменных
        $this->nametho[1] = "тисяча"; // 1
        $this->nametho[2] = "тисячі"; // 2, 3, 4
        $this->nametho[3] = "тисяч"; // >4

        $this->namemil[1] = "мільйон"; // 1
        $this->namemil[2] = "мільйона"; // 2, 3, 4
        $this->namemil[3] = "мільйонів"; // >4

        $this->namemrd[1] = "мільярд"; // 1
        $this->namemrd[2] = "мільярда"; // 2, 3, 4
        $this->namemrd[3] = "мільярдів"; // >4
        if ($level == 1) {
            $num_arr = null;
        } else if ($level == 2) {
            $num_arr = $this->nametho;
        } else if ($level == 3) {
            $num_arr = $this->namemil;
        } else if ($level == 4) {
            $num_arr = $this->namemrd;
        } else {
            $num_arr = null;
        }
        if (isset($num_arr)) {
            $last2 = substr($amount, -2);
            $last1 = substr($amount, -1);
            if ((strlen($amount) != 1 && substr($last2, 0, 1) == 1) || $last1 >= 5) {
                $res_num = $num_arr[3];
            } // 10-19
            else if ($last1 == 1) {
                $res_num = $num_arr[1];
            } // для 1-цы
            else {
                $res_num = $num_arr[2];
            } // все остальные 2, 3, 4
            return ' ' . $res_num;
        } # if
    }   
}
