<?php

namespace frontend\modules\catalog\controllers;

use frontend\modules\catalog\models\Counterparty;
use frontend\modules\catalog\models\CounterpartySearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use Yii;

/**
 * CounterpartyController implements the CRUD actions for Counterparty model.
 */
class CounterpartyController extends Controller
{
    /**
     * @inheritDoc
     */
    public function behaviors()
    {
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
     * Lists all counterparty models.
     *
     * @return string
     */
    public function actionIndex()
    {
        if ($this->request->isAjax) {  
              $models = Counterparty::find()->all();
                return $this->render('list', [
                    'models' => $models,

               ]);
        } else {
            $searchModel = new CounterpartySearch();
            $dataProvider = $searchModel->search($this->request->queryParams);

            return $this->render('index', [
                'searchModel' => $searchModel,
                'dataProvider' => $dataProvider,
            ]);
        }
     }

     /**
     * Lists all counterparty models.
     *
     * @return string
     */
    public function actionResulte()
    {
        Yii::$app->response->format = yii\web\Response::FORMAT_JSON;
        if ($this->request->isAjax) {   

            $searchModel = new CounterpartySearch();
            $dataProvider = $searchModel->search($this->request->queryParams);
            return $this->dataProviderToArray($dataProvider); 
   
        }
    }
    /**
     * Displays a single counterparty model.
     * @param int $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new counterparty model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
          $model = new Counterparty();

        if ($this->request->isPost) {
            if ($this->request->isAjax) {
                if ($model->load($this->request->post()) && $model->save()) {
                    Yii::$app->response->format = yii\web\Response::FORMAT_JSON;
                    return $json = array('id' => $model->id, 'name' => $model->name);
                }

            } else {
                if ($model->load($this->request->post()) && $model->save()) {
                    return $this->redirect(['view', 'id' => $model->id]);
                }
            }
        } else {
            $model->loadDefaultValues();
        }

        if ($this->request->isAjax) {
            return $this->render('_formAjax', ['model' => $model]);
        } else {
            return $this->render('create', ['model' => $model]);
        }
   
    }

    /**
     * Updates an existing Counterparty model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing Counterparty model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param int $id ID
     * @return \yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Counterparty model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return Counterparty the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Counterparty::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    
        private function dataProviderToArray ($dataProvider) {
        $json = false;
            foreach ($dataProvider->models as $model) {
                $company = array(
                    'id' => $model->id,
                    'name' => $model->name,
                    'edrpou' => $model->edrpou
                    );
                $json[] = $company;
            }
            return $json;
    }
}
