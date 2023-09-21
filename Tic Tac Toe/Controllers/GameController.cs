using Microsoft.AspNetCore.Mvc;

namespace Tic_Tac_Toe.Controllers
{
    public class GameController : Controller
    {
        public IActionResult Index()
        {
            return View("Home");
        }

        public IActionResult TicTacToe()
        {
            return View();
        }
    }
}
