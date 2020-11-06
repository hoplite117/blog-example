<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::group(['middleware' => ['auth']], function() {
    Route::post('/posts/create-blog-post', [App\Http\Controllers\BlogPostController::class, 'createBlogPost']);
    Route::post('/posts/delete-post', [App\Http\Controllers\BlogPostController::class, 'deletePost']);
    Route::get('/logout', [App\Http\Controllers\Auth\LoginController::class, 'logout']);
    Route::get('/manage/get-all-users', [App\Http\Controllers\ManageController::class, 'getAllUsers']);
});

Route::get('/posts/get-all-posts', [App\Http\Controllers\BlogPostController::class, 'getAllPosts']);

Route::get('/{path?}', [App\Http\Controllers\HomeController::class, 'index']);

/*
Route::group(['middleware' => ['web']], function () {
    
});
*/

//Route::view('/{path?}', 'welcome')->with(["user" => collect(Auth::user())]);

/*
Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
*/
