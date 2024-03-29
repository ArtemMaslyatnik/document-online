<?php

namespace frontend\modules\catalog\controllers;

use yii\filters\Cors;
use yii\rest\ActiveController;
/**
 * ContractController implements the CRUD actions for Contract model.
 */
class ContractController extends ActiveController
{
    public $modelClass = '\frontend\modules\catalog\resources\ContractResource';
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
            ]
        );
    }   
}
