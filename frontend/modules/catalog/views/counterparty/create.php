<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model frontend\modules\catalog\models\Counterparty */

$this->title = 'Create Counterparty';
$this->params['breadcrumbs'][] = ['label' => 'Counterparties', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="counterparty-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
