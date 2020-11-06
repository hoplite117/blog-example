<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\BlogPost;

class ManageController extends Controller
{
    public function getAllUsers()
    {
        $users = User::get();
        foreach ($users as $user){
            $user['postCount'] = BlogPost::where('user_id', $user->id)->count();
        }
        return $users;
    }
}
