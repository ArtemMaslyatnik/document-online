<?php

use yii\db\Migration;

/**
 * Class m221026_103404_type_contract_table
 */
class m221026_103404_type_contract_table extends Migration
{
      /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('type_contract', [
            'id' => $this->primaryKey()->notNull(),
            'name' => $this->string(128)->notNull(),

        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('type_contract');
    }
}
