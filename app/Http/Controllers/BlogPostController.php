<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BlogPost;
use Illuminate\Support\Facades\Auth;

class BlogPostController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
       
    }

    public function getAllPosts()
    {
        return BlogPost::with('user')->get();
    }

    /**
    * Add a new post
    *
    * @param  Request  $request
    * @return Response
    */
    public function createBlogPost(Request $request){
        $post = new BlogPost();
        $post->title = $request->title;
        $post->content = $request->content;
        $post->user_id = $request->user()->id;
        $post->save();
        return $post->id;
    }
}
