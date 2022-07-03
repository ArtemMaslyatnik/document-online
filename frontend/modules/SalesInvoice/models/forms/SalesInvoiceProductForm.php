<?php

namespace frontend\modules\SalesInvoice\models\forms;

use Yii;
use yii\base\Model;
use frontend\modules\SalesInvoice\models\SalesInvoiceProduct;
use frontend\modules\SalesInvoice\models\SalesInvoice;

class SalesInvoiceProductForm extends Model {
    
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
    public static function tableName()
    {
        return 'sales_invoice_products';
    }
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['lineNumber'], 'integer'],
            [['price', 'amountTotal', 'quantity'], 'double'],
            [['unit', 'product'], 'string', 'max' => 255],
       ];
    }
    
    /**
     * @return boolean
     */
    public function save($id)
    {
        
        if ($this->validate()) {      
            $salesInvoiceProduct = new SalesInvoiceProduct();
            $salesInvoiceProduct->lineNumber = $this->lineNumber;
            $salesInvoiceProduct->sales_invoice_id = $id;
            $salesInvoiceProduct->product_id = 1;
            $salesInvoiceProduct->quantity = $this->quantity;
            $salesInvoiceProduct->unit_id = 1;
            $salesInvoiceProduct->price = $this->price;
            $salesInvoiceProduct->amountTotal = $this->amountTotal;
            $salesInvoiceProduct->save(false);  
            return true;
          }

        return false;

    }
    
    
    
}
