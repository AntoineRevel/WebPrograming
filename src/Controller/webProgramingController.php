<?php

namespace App\Controller;



use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class webProgramingController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function home(): Response
    {
        return $this->render('web_programing/index.html.twig', [
            'controller_name' => 'WebProgramingController',
        ]);
    }

    #[Route('/WebPrograming', name: 'app_web_programing')]
    public function index(): Response
    {
        return $this->render('web_programing/index.html.twig', [
            'controller_name' => 'WebProgramingController',
        ]);
    }

    #[Route('/WebPrograming/javaScrit')]
    public function javaScrit(): Response
    {
        return $this->render('web_programing/section1.html.twig', []);
    }

    #[Route('/WebPrograming/mySQL')]
    public function mysql(EntityManagerInterface $em): Response
    {

        $users=$em->getRepository(User::class)->findAll();

        return $this->render('web_programing/section3.html.twig', ['users'=>$users]);
    }


}