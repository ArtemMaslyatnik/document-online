<?php

use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;
use frontend\modules\catalog\models\Counterparty;

/* @var $this yii\web\View */
/* @var $searchModel frontend\modules\catalog\models\CounterpartySearch */
/* @var $dataProvider yii\data\ActiveDataProvider */




$this->title = 'Counterparties';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="counterparty-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create Counterparty', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'user_id',
            'contract_id',
            'full_name',
            'name',
            //'bank',
            //'address',
            //'edrpou',
            //'ipn',
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, Counterparty $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 }
            ],
        ],
    ]); ?>


</div>
