<?php

namespace frontend\modules\SalesInvoice\models;

use Yii;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;
use frontend\modules\SalesInvoice\models\SalesInvoiceProduct;
/**
 * This is the model class for table "sales_invoice".
 *
 * @property int $id
 * @property int $user_id
 * @property int $date
 * @property string $number
 * @property int $company_id
 * @property int $contract_id
 * @property int $counterparty_id
 * @property string|null $authority_manager
 * @property string|null $authority_counterparty
 * @property int $proxy_date
 * @property string $proxy_number
 * @property int $vat_id
 * @property int $created_at
 * @property int $updated_at
 */
class SalesInvoice extends ActiveRecord {
    
    
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'sales_invoice';
    }
    
        /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            TimestampBehavior::className(),
        ];
    }

//    /**
//     * {@inheritdoc}
//     */
//    public function rules()
//    {
//        return [
//            [['user_id', 'number', 'company_id', 'contract_id', 'counterparty_id', 'proxyDate', 'proxy_number', 'vat_id', 'created_at', 'updated_at'], 'required'],
//            [['user_id', 'company_id', 'contract_id', 'counterparty_id', 'proxy_date', 'vat_id', 'created_at', 'updated_at'], 'integer'],
//            [['number', 'proxy_number'], 'string', 'max' => 16],
//            [['authority_manager', 'authority_counterparty'], 'string', 'max' => 32],
//        ];
//    }

    
    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'user_id' => 'User ID',
            'date' => 'Date',
            'number' => 'Number',
            'company_id' => 'Company ID',
            'contract_id' => 'Contract ID',
            'counterparty_id' => 'Counterparty ID',
            'authority_manager' => 'Authority Manager',
            'authority_counterparty' => 'Authority Counterparty',
            'proxy_date' => 'Proxy Date',
            'proxy_number' => 'Proxy Number',
            'vat_id' => 'Vat ID',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }
    
    public function getSalesInvoiceProduct()
    {
        return $this->hasMany(SalesInvoiceProduct::class, ['id' => 'sales_invoice_product_id'])
            ->viaTable('sales_invoice_sales_invoice_product', ['sales_invoice_id' => 'id']);
    }
    
}
