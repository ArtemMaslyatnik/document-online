<?php

namespace frontend\models;


use yii\base\Model;
use frontend\modules\catalog\models\Company;
use yii\helpers\ArrayHelper;

class Site extends Model {
	
	public $company;
	
	public function rules()
	{
		return [
			[['company'], 'integer'],
		];
	}
	
	public function fields()
	{
            return ['company'];
	}
	
	public function attributes()
	{
            return ['company'];
	}
        
        public function getCompanyList() {

            return ArrayHelper::map(Company::find()->all(), 'id', 'name');

    }  
}