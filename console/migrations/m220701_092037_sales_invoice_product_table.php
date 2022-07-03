<?php

use yii\db\Migration;

/**
 * Class m220701_092037_sales_invoice_products_table
 */
class m220701_092037_sales_invoice_product_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('sales_invoice_product', [
            'id' => $this->primaryKey(11),
            'line_number' => $this->integer(11)->notNull(),
            'product_id' => $this->string(11)->notNull(),
            'quantity' => $this->decimal(15,3)->notNull(),
            'unit_id' => $this->integer(11)->notNull(),
            'price' => $this->decimal(15,2)->notNull(),
            'amount_total' => $this->decimal(15,2)->notNull(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('sales_invoice_products');
    }
}
