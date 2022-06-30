<?php

namespace frontend\modules\SalesInvoice\models\forms;

use Yii;
use yii\base\Model;

class SalesInvoiceForm extends Model {
    
    //document header
    public $date;
    public $number;
    
    public $company;
    public $bankAccount;
    public $contract;   
    
    public $counterparty;
    public $counterpartyBankAcc;
    
    //footer document
    public $authorityManager;
    public $authorityCounterparty;
    
    public $proxyDate;
    public $proxyNumber;
    


    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['number','proxyNumber'], 'integer'],
            [[ 'proxyDate', 'date', 'company', 'bankAccount', 'contract', 'counterparty', 'counterpartyBankAcc', 'authorityManager', 'authorityCounterparty'], 'string', 'max' => 255],
       ];
    }
 
}