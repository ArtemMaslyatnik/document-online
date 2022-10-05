<?php

use yii\db\Migration;

/**
 * Class m220918_161221_contract_table
 */
class m220918_161221_contract_table extends Migration
{
        /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('contract', [
            'id' => $this->primaryKey()->notNull(),
            'user_id' => $this->integer(11)->notNull(),
            'date' => $this->dateTime()->notNull(),
            'number' => $this->string(128)->notNull(),
            'company_id' => $this->integer(11)->notNull(),
            'counterparty_id' => $this->integer(11)->notNull(),
            'type_contract_id' => $this->integer(11)->notNull(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('contract');
    }
}
