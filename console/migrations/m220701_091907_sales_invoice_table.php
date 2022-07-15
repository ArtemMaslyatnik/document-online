<?php

use yii\db\Migration;

/**
 * Class m220701_091907_sales_invoice_table
 */
class m220701_091907_sales_invoice_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('sales_invoice', [
            'id' => $this->primaryKey()->notNull(),
            'user_id' => $this->integer()->notNull(),
            'date' => $this->dateTime()->notNull(),
            'number' => $this->string(16)->notNull(),
            'company_id' => $this->integer(11)->notNull(),
            'contract_id' => $this->integer()->notNull(), 
            'counterparty_id' => $this->integer(11)->notNull(),
            'authority_manager' => $this->string(32),
            'authority_counterparty' => $this->string(32),
            'proxy_date' => $this->integer(),
            'proxy_number' => $this->string(16),
            'vat_id' => $this->integer()->notNull(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('sales_invoice');
    }
}
