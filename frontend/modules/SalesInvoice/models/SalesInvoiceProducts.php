<?php

namespace frontend\modules\SalesInvoice\models;

use Yii;
use yii\base\Model;

class SalesInvoiceProducts extends Model {
    
    //table 
    public $lineNumber;
    public $product;
    public $quantity;
    public $unit;       
    public $price;
    public $amountTotal;
    
    
        /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['lineNumber'], 'integer'],
            [['price', 'amountTotal', 'quantity', 'lineNumber'], 'double'],
            [['unit', 'product'], 'string', 'max' => 255],
       ];
    }
}
