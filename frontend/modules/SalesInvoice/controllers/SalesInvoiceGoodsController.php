<?php

namespace frontend\modules\SalesInvoice\controllers;

use yii\web\Controller;
use frontend\modules\SalesInvoice\models\forms\SalesInvoiceForm;
use app\models\Setting;
/**
 * Default controller for the `SalesInvoice` module
 */
class SalesInvoiceGoodsController extends Controller
{
    /**
     * Renders the index view for the module
     * @return string
     */
    public function actionIndex()
    {
        return $this->render('index');
    }
    
    
    public function actionCreate()
    {
        $model = new SalesInvoiceForm();
        
        $count = count(Yii::$app->request->post('Setting', []));
        $settings = [new Setting()];
        for($i = 1; $i < $count; $i++) {
            $settings[] = new Setting();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }
}
