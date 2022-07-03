<?php

use yii\db\Migration;

/**
 * Class m220703_094604_company_table
 */
class m220703_094604_company_table extends Migration
{
      /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('company', [
            'id' => $this->primaryKey(11),
            'full_name' => $this->string(128)->notNull(),
            'name' => $this->string(64)->notNull(),
            'bank' => $this->string(64)->notNull(),
            'address' => $this->string(256)->notNull(),
            'edrpou' => $this->integer(8)->notNull(),
            'ipn' => $this->integer(12),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('company');
    }
}
