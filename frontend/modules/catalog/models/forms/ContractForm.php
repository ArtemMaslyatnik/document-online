<?php

namespace frontend\modules\catalog\models\forms;

use yii\base\Model;
use common\models\User;
use frontend\modules\catalog\models\Counterparty;
use frontend\modules\catalog\models\Contract;
use yii\helpers\ArrayHelper;



class ContractForm extends Model {
    
    //catalog contract header
    public $date;
    public $number;
    public $company;
    public $counterparty;
    public $type_contract;
    private $user;
    


    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['date', 'number', 'counterparty', 'type_contract'], 'required'],
            [['number',  'counterparty', 'type_contract'], 'string', 'max' => 255],
       ];
    }
    
    /**
     * @param User $user
     */
    public function __construct($user) {
        $this->user = $user;
    } 
    
    /**
     * @return boolean
     */
    public function save()
    {
        if ($this->validate()) {      
            $Contract = new Contract();
            $Contract->user_id = $this->user->getId();
            $Contract->date = $this->date;
            $Contract->number = $this->number;
            $Contract->company_id = $this->company;
            $Contract->counterparty_id = $this->counterparty;
            $Contract->type_contract_id = 1;
            $Contract->save(false);  
            return $Contract;
          }

        return false;

    }
    
    public function getСounterpartyList() {

        return ArrayHelper::map(Counterparty::find()->all(), 'id', 'name');

    }  
    
}