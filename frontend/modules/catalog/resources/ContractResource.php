<?php

/** Company **/
namespace frontend\modules\catalog\resources;




class ContractResource extends \frontend\modules\catalog\models\Contract
{
        public function fields()
    {
        return [
            'id',
            'date',
            'name' => function ($model) {
                return $model->number;
            },
            'counterparty_id',
            'counterparty_name' => function ($model) {
                return $model->counterparty->name;
            },
            'company_id',
            'company_name' => function ($model) {
                return $model->company->name;
            },
            'type_contract_id',
            'type_contract_name' => function ($model) {
                return $model->typeContract->name;
            },
            'user_id',
            'user_name' => function ($model) {
                return $model->user->username;
            },

         ];
    }
//    public function extraFields()
//    {
//        return ['user', 'counterparty', 'company', 'typeContract'];
//    }
    
}