<?php

namespace frontend\modules\enumeration\controllers;

use yii\filters\Cors;
use yii\rest\ActiveController;


/**
 * CompanyController implements the CRUD actions for Company model.
 */
class TypeContractController extends ActiveController
{
    public $modelClass = '\frontend\modules\enumeration\resources\TypeContractResource';
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
