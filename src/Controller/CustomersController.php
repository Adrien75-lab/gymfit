<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;

class CustomersController
{
    #[Route('/customers/{id}', name: 'customers_show')]
    public function show(Request $request)
        {
        $id = $request->attributes->get('id');
        // ...
    }
}