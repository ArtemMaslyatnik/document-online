<?php

use yii\db\Migration;

/**
 * Class m220702_070756_sales_invoice_sales_invoice_product_table
 */
class m220702_070756_sales_invoice_sales_invoice_product_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('sales_invoice_sales_invoice_product', [
            'id' => $this->primaryKey(11),
            'sales_invoice_id' => $this->integer(11)->notNull(),
            'sales_invoice_product_id' => $this->integer(11)->notNull(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('sales_invoice_sales_invoice_product');
    }
}
