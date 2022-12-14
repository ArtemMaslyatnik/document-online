<?php

/** Company **/
namespace frontend\modules\catalog\resources;




class CounterpartyResource extends \frontend\modules\catalog\models\Counterparty
{
    public function fields()
    {
        return [
            'address',
            'full_name',
            'bank',
            'name',
            'edrpou',
            'user_id',
            'contract',
            'id',
            'ipn',

        ];
    }

    public function extraFields()
    {
        return ['contract'];
    }
}