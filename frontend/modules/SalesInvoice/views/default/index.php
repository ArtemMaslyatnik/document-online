<?php

use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;
use frontend\modules\SalesInvoice\models\SalesInvoice;
/* @var $this yii\web\View */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Sales invoices';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="sales-invoice-document-index">

    <h1><?= Html::encode($this->title) ?></h1>


    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'number',
            'date',
            'user_id',
            'contract_id',
            'company_id',
            'counterparty_id',
              [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, SalesInvoice $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 }
            ],
        ],
    ]); ?>


</div>
