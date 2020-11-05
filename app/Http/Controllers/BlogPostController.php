<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BlogPost;

class BlogPostController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    /*
    public function __construct()
    {
    }
    */

    public function getAllPosts()
    {
        return BlogPost::all();
    }

    public function createBlogPost(Request $request){
        $post = new BlogPost();
        $post->title = $request->title;
        $post->content = $request->content;
        $post->save();
        return $post->id;
    }
}
