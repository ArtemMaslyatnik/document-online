<?php
// _list_item.php
use yii\helpers\Html;
use yii\web\JqueryAsset;
?>
    <div class="modal-header">
        <h5 class="modal-title">List company</h5>
    </div>
    <div id="list-company-result-menu">
    <p>
        <?= Html::button('+', ['id' => 'button-create-company', 'class' => 'btn btn-outline-success']); ?>
    </p>

        <div class="row" >
            <div class="col-lg-2"><?= Html::input('text', 'CompanySearch[id]', null, ['class'=> 'form-control']) . '<br>'; ?></div>
            <div class="col-lg-7"><?= Html::input('text', 'CompanySearch[name]', null, ['class'=> 'form-control']) . '<br>'; ?></div>
            <div class="col-lg-2"><?= Html::input('text', 'CompanySearch[edrpou]', null, ['class'=> 'form-control']) . '<br>'; ?></div>
            <div class="col-lg-1"><?= Html::button('ok', ['class'=> 'btn btn-outline-success', 'id'=> 'btn-search']) . '<br>'; ?></div>
        </div>  
    </div>
    <div id="list-company-result-header">
        <div class="row" >
            <div class="col-lg-2">Code:</div>
            <div class="col-lg-7">Name:</div>
            <div class="col-lg-2">Edrpou:</div>
        </div>
    </div>
    <div id="list-company-result">
        <?php foreach ($models as $model):?>

            <div class="row" data-key="<?= $model->id; ?>">
                <div class="col-lg-2">
                    <?= Html::encode($model->id).'<br>'; ?>
                </div>
                <div class="col-lg-7">
                    <?= Html::a( $model->name, ['#', 'id' => '1'], ['data-kay'=> $model->id, 'onclick'=>'return false','class' => 'insert-link-company' ]).'<br>'; ?>
                </div>
                <div class="col-lg-2">
                    <?= Html::encode($model->edrpou).'<br>'; ?>
                </div>
            </div>  
        <?php endforeach; ?>
    </div>

<?php $this->registerJsFile('@web/js/SalesInvoice.js', [
    'depends' => JqueryAsset::className(),
]);
