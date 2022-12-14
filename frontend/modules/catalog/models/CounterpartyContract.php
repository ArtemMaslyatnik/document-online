<?php

namespace frontend\modules\catalog\models;

use Yii;

/**
 * This is the model class for table "counterparty_contract".
 *
 * @property int $id
 * @property int $counterparty_id
 * @property int $contract_id
 */
class CounterpartyContract extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'counterparty_contract';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['counterparty_id', 'contract_id'], 'required'],
            [['counterparty_id', 'contract_id'], 'integer'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'counterparty_id' => 'Counterparty ID',
            'contract_id' => 'Contract ID',
        ];
    }
}
