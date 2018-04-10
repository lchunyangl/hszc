<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 50)->default('')->comment('分类名');
            $table->integer('parent_id')->default(0)->comment('父级分类id')->index('parent_id');
            $table->tinyInteger('is_show')->default(0)->comment('是否显示')->index('is_show');
            $table->tinyInteger('sort_order')->default(0)->comment('排序')->index('sort_order');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('category');
    }
}
