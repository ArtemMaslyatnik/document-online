<?php

namespace frontend\modules\catalog\models;

use yii\behaviors\TimestampBehavior;
use frontend\modules\catalog\resources\UserResource;
use frontend\modules\catalog\resources\CompanyResource;
use frontend\modules\catalog\resources\CounterpartyResource;
use frontend\modules\enumeration\resources\TypeContractResource;


/**
 * This is the model class for table "contract".
 *
 * @property int $id
 * @property string $date
 * @property string $number
 * @property int $company_id
 * @property int $counterparty_id
 * @property int $type_contract_id
 * @property int $created_at
 * @property int $updated_at
 */
class Contract extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'contract';
    }
    
    
//    /**
//     * {@inheritdoc}
//     */
//    public function behaviors()
//    {
//        return [
//            TimestampBehavior::className(),
//        ];
//    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['date', 'number', 'company_id', 'counterparty_id', 'type_contract_id', 'created_at', 'updated_at'], 'required'],
            [['date'], 'safe'],
            [['company_id', 'counterparty_id', 'type_contract_id', 'created_at', 'updated_at'], 'integer'],
            [['number'], 'string', 'max' => 128],
        ];
    }
    


    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'date' => 'Date',
            'user' => 'User ID',
            'number' => 'Number',
            'company_id' => 'Company ID',
            'counterparty_id' => 'Counterparty ID',
            'type_contract_id' => 'Type Contract ID',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }
    
    public function getUser()
    {
        return $this->hasOne(UserResource::className(), ['id' => 'user_id']);
    }
    
    public function getCompany()
    {
        return $this->hasOne(CompanyResource::className(), ['id' => 'company_id']);
    }
    
    public function getCounterparty()
    {
        return $this->hasOne(CounterpartyResource::className(), ['id' => 'counterparty_id']);
    }
    
    public function getTypeContract()
    {
        return $this->hasOne(TypeContractResource::className(), ['id' => 'type_contract_id']);
    }
    
}
