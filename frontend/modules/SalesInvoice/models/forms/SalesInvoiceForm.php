<?php

namespace frontend\modules\SalesInvoice\models\forms;

use yii\base\Model;
use frontend\modules\SalesInvoice\models\SalesInvoice;
use common\models\User;

class SalesInvoiceForm extends Model {
    
    //document header
    public $date;
    public $number;
    
    public $company;
    public $bank_account;
    public $contract;   
    
    public $counterparty;
    public $counterparty_bank_acc;
    
    //footer document
    public $authority_manager;
    public $authority_counterparty;
    
    public $proxy_date;
    public $proxy_number;
    
    private $user;




    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['proxy_number'], 'integer'],
            [['number', 'proxy_date', 'date', 'company', 'bank_account', 'contract', 'counterparty', 'counterparty_bank_acc', 'authority_manager', 'authority_counterparty'], 'string', 'max' => 255],
       ];
    }
    
    /**
     * @param User $user
     */
    public function __construct(User $user) {
        $this->user = $user;
    } 
    
    /**
     * @return boolean
     */
    public function save()
    {
        if ($this->validate()) {      
            $salesInvoice = new SalesInvoice();
            $salesInvoice->user_id = $this->user->getId();
            $salesInvoice->date = $this->date;
            $salesInvoice->number = $this->number;
            $salesInvoice->company_id = 1;
            $salesInvoice->contract_id = 1;
            $salesInvoice->counterparty_id = 1;
            $salesInvoice->authority_manager = $this->authority_manager;
            $salesInvoice->authority_counterparty = $this->authority_counterparty;
            $salesInvoice->proxy_date = $this->proxy_date;
            $salesInvoice->proxy_number = $this->proxy_number;
            $salesInvoice->vat_id = 1;
            $salesInvoice->save(false);  
            return $salesInvoice;
          }

        return false;

    }
 
}