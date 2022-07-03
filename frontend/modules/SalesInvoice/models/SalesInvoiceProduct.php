<?php

namespace frontend\modules\SalesInvoice\models;

use Yii;
use yii\db\ActiveRecord;
use frontend\modules\SalesInvoice\models\SalesInvoice;

/**
 * This is the model class for table "sales_invoice_product".
 *
 * @property int $id
 * @property int $sales_invoice_id
 * @property int $lineNumber
 * @property string $product_id
 * @property float $quantity
 * @property int $unit_id
 * @property float $price
 * @property float $amountTotal
 */
class SalesInvoiceProduct extends ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'sales_invoice_product';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['line_number', 'product_id', 'quantity', 'unit_id', 'price', 'amount_total'], 'required'],
            [['line_number', 'unit_id'], 'integer'],
            [['quantity', 'price', 'amount_total'], 'number'],
            [['product_id'], 'string', 'max' => 11],
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
            'line_number' => 'Line Number',
            'product_id' => 'Product ID',
            'quantity' => 'Quantity',
            'unit_id' => 'Unit ID',
            'price' => 'Price',
            'amount_total' => 'Amount Total',
        ];
    }
    
}
