<?php

namespace frontend\modules\catalog\resources;


/**
 * UserResource model
 *

 */
class UserResource extends \frontend\modules\catalog\models\User
{
    public function fields()    
    {
        return [
            'id', 
            'name' => function ($model) {
                return $model->username;
            },
        ];
    }
    

}
