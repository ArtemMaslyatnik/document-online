<?php

namespace frontend\modules\catalog\controllers;


use yii\rest\ActiveController;
use yii\filters\Cors;
/**
 * CompanyController implements the CRUD actions for Company model.
 */

class UserController extends ActiveController
{
    public $modelClass = '\frontend\modules\catalog\resources\UserResource';
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
