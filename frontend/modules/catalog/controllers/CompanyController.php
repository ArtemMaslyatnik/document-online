<?php

namespace frontend\modules\catalog\controllers;

use frontend\modules\catalog\models\Company;
use frontend\modules\catalog\models\CompanySearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use Yii;

/**
 * CompanyController implements the CRUD actions for Company model.
 */
class CompanyController extends Controller
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
     * Lists all Company models.
     *
     * @return string
     */
    public function actionIndex()
    {
        if ($this->request->isAjax) {  
            $models = Company::find()->all();
            return $this->render('list', [
                'models' => $models,

            ]);
        } else {
            $searchModel = new CompanySearch();
            $dataProvider = $searchModel->search($this->request->queryParams);

            return $this->render('index', [
                'searchModel' => $searchModel,
                'dataProvider' => $dataProvider,
            ]);
        }
    }
    
    
       /**
     * Lists all Company models.
     *
     * @return string
     */
    public function actionResulte()
    {
        Yii::$app->response->format = yii\web\Response::FORMAT_JSON;
        if ($this->request->isAjax) {   

            $searchModel = new CompanySearch();
            $dataProvider = $searchModel->search($this->request->queryParams);
            return $this->dataProviderToArray($dataProvider); 
   
        }
    }
    
    
    /**
     * Displays a single Company model.
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
     * Creates a new Company model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate() {

        
        $model = new Company();

        if ($this->request->isPost) {
            if ($this->request->isAjax) {
                if ($model->load($this->request->post()) && $model->save()) {
                    Yii::$app->response->format = yii\web\Response::FORMAT_JSON;
                    return $json = array('id' => $model->id, 'name' => $model->name);
                }

            }
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['view', 'id' => $model->id]);
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
     * Updates an existing Company model.
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
     * Deletes an existing Company model.
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
     * Finds the Company model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return Company the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Company::findOne(['id' => $id])) !== null) {
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
