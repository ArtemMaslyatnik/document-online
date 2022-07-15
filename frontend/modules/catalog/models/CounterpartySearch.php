<?php

namespace frontend\modules\catalog\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use frontend\modules\catalog\models\Counterparty;

/**
 * CounterpartySearch represents the model behind the search form of `frontend\modules\catalog\models\Counterparty`.
 */
class CounterpartySearch extends Counterparty
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'user_id', 'contract_id'], 'integer'],
            [['full_name', 'name', 'bank', 'address', 'edrpou', 'ipn'], 'safe'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = Counterparty::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
            'user_id' => $this->user_id,
            'contract_id' => $this->contract_id,
        ]);

        $query->andFilterWhere(['like', 'full_name', $this->full_name])
            ->andFilterWhere(['like', 'name', $this->name])
            ->andFilterWhere(['like', 'bank', $this->bank])
            ->andFilterWhere(['like', 'address', $this->address])
            ->andFilterWhere(['like', 'edrpou', $this->edrpou])
            ->andFilterWhere(['like', 'ipn', $this->ipn]);

        return $dataProvider;
    }
}
