<?php

namespace frontend\modules\SalesInvoice\models;

use Yii;
use yii\db\ActiveRecord;

/**
 * This is the model class for table "sales_invoice_sales_invoice_product".
 *
 * @property int $id
 * @property int $sales_invoice_id
 * @property int $sales_invoice_product_id
 */
class SalesInvoiceSalesInvoiceProduct extends ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'sales_invoice_sales_invoice_product';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['sales_invoice_id', 'sales_invoice_product_id'], 'required'],
            [['sales_invoice_id', 'sales_invoice_product_id'], 'integer'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'sales_invoice_id' => 'Sales Invoice ID',
            'sales_invoice_product_id' => 'Sales Invoice Product ID',
        ];
    }
    
    

}
