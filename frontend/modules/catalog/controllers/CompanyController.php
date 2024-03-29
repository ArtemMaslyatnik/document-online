<?php

namespace frontend\modules\catalog\controllers;

use yii\filters\Cors;
use yii\rest\ActiveController;


/**
 * CompanyController implements the CRUD actions for Company model.
 */
class CompanyController extends ActiveController
{
    public $modelClass = '\frontend\modules\catalog\resources\CompanyResource';
    /**
     * @inheritDoc
     */
    public function behaviors()
    {
        return array_merge(
            parent::behaviors(),
            [
                'cors' => [
                    'class' => Cors::className(),
                ],
            ],
        );
    }
}
