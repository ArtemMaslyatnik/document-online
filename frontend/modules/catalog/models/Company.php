<?php

namespace frontend\modules\catalog\models;
  
use yii\behaviors\BlameableBehavior;
use yii\db\ActiveRecord;
use frontend\modules\catalog\resources\UserResource;


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
class Company extends ActiveRecord
{
    
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'company';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['user_id','full_name', 'name', 'bank', 'address', 'edrpou', 'ipn'], 'required'],
            [['user_id'], 'integer'],
            [['full_name'], 'string', 'max' => 128],
            [['name', 'bank'], 'string', 'max' => 64],
            [['address'], 'string', 'max' => 256],
            [['edrpou'], 'string', 'max' => 8],
            [['ipn'], 'string', 'max' => 12],
        ];
    }


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
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'usre_id' => 'User Id',
            'full_name' => 'Full Name',
            'name' => 'Name',
            'bank' => 'Bank',
            'address' => 'Address',
            'edrpou' => 'Edrpou',
            'ipn' => 'Ipn',
        ];
    }
    
    
    public function getUser()
    {
        return $this->hasOne(UserResource::className(), ['id' => 'user_id']);
    }
}
