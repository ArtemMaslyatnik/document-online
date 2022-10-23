<?php

namespace frontend\modules\catalog\models;
  
use yii\db\ActiveRecord;


/**
 * This is the model class for table "company".
 *
 * @property int $id
 * @property int $user_id
 * @property string $full_name
 * @property string $name
 * @property string $bank
 * @property string $address
 * @property int $edrpou
 * @property int|null $ipn
 */
class User extends \common\models\User
{
    
//    /**
//     * {@inheritdoc}
//     */
//    public static function tableName()
//    {
//        return 'user';
//    }


   


//responsibility user on front
//public function behaviors()
//{
//    return [
//        [
//            //'class' => BlameableBehavior::class,
//            //'createdByAttribute' => 'user_id',
//            //'updatedByAttribute' => false,
//            //'attributes' => [
//            //    ActiveRecord::EVENT_BEFORE_VALIDATE => ['user_id'] // If usr_id is required
//            //]
//        ],
//    ];
//}
    /**
     * {@inheritdoc}
     */
//    public function attributeLabels()
//    {
//        return [
//            'id' => 'ID',
//            'usre_id' => 'User Id',
//            'full_name' => 'Full Name',
//            'name' => 'Name',
//            'bank' => 'Bank',
//            'address' => 'Address',
//            'edrpou' => 'Edrpou',
//            'ipn' => 'Ipn',
//        ];
//    }

}
