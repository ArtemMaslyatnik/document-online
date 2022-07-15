<?php

use yii\db\Migration;

/**
 * Class m220715_123626_counterparty_table
 */
class m220715_123626_counterparty_table extends Migration
{
      /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('counterparty', [
            'id' => $this->primaryKey(11),
            'user_id' => $this->integer(11)->notNull(),
            'contract_id' => $this->integer(11)->notNull(),
            'full_name' => $this->string(128)->notNull(),
            'name' => $this->string(64)->notNull(),
            'bank' => $this->string(64)->notNull(),
            'address' => $this->string(256)->notNull(),
            'edrpou' => $this->string(8)->notNull(),
            'ipn' => $this->string(12),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('counterparty');
    }
}
