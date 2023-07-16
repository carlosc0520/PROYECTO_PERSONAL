using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PROYECTO_PERSONAL.Models;


namespace PROYECTO_PERSONAL.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InicioController : ControllerBase
    {
        private readonly ProyectoPersonalContext _dbcontext;

        public InicioController(ProyectoPersonalContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        [HttpGet]
        [Route("listarProyectos")]
        public async Task<IActionResult> listarProyectos()
        {
            List<Proyecto> lista = _dbcontext.Proyectos.OrderByDescending(t => t.Id).ToList();

            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost]
        [Route("agregarSolicitud")]
        public async Task<IActionResult> agregarSolicitud(Solicitud solicitud)
        {
            solicitud.Fregistro = DateTime.Now;
            solicitud.Esolicitud = "P";
            try
            {
                _dbcontext.Solicitudes.Add(solicitud);
                _dbcontext.SaveChanges();
                return StatusCode(StatusCodes.Status200OK, solicitud);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

    }
}
