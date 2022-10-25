<?php

namespace frontend\modules\catalog\controllers;

use yii\filters\Cors;
use yii\rest\ActiveController;

/**
 * CounterpartyController implements the CRUD actions for Counterparty model.
 */
class CounterpartyController extends ActiveController
{
        public $modelClass = '\frontend\modules\catalog\resources\CounterpartyResource';
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
