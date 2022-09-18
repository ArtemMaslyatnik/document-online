<?php

namespace frontend\modules\catalog\models;

use yii\behaviors\BlameableBehavior;
use yii\db\ActiveRecord;

/**
 * This is the model class for table "counterparty".
 *
 * @property int $id
 * @property int $user_id
 * @property int $contract_id
 * @property string $full_name
 * @property string $name
 * @property string $bank
 * @property string $address
 * @property string $edrpou
 * @property string|null $ipn
 */
class Counterparty extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'counterparty';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['user_id', 'contract_id', 'full_name', 'name', 'bank', 'address', 'edrpou', 'ipn'], 'required'],
            [['user_id', 'contract_id'], 'integer'],
            [['full_name'], 'string', 'max' => 128],
            [['name', 'bank'], 'string', 'max' => 64],
            [['address'], 'string', 'max' => 256],
            [['edrpou'], 'string', 'max' => 8],
            [['ipn'], 'string', 'max' => 12],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'user_id' => 'User ID',
            'contract_id' => 'Contract ID',
            'full_name' => 'Full Name',
            'name' => 'Name',
            'bank' => 'Bank',
            'address' => 'Address',
            'edrpou' => 'Edrpou',
            'ipn' => 'Ipn',
        ];
    }
    
    public function behaviors()
{
    return [
        [
            'class' => BlameableBehavior::class,
            'createdByAttribute' => 'user_id',
            'updatedByAttribute' => false,
            'attributes' => [
                ActiveRecord::EVENT_BEFORE_VALIDATE => ['user_id'] // If usr_id is required
            ]
        ],
    ];
}
}
