using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Boletim.Models;
using Boletim.services;
using Microsoft.AspNetCore.Mvc;

namespace Boletim.controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        private readonly AtividadesServices _atividadeService;

        public AtividadeController(AtividadesServices atividadeService)
        {
            _atividadeService = atividadeService;
        }        

        [HttpGet]
        public async Task<List<Atividade>> Get() => await _atividadeService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Atividade>> Get(string id) {
            var atividade = await _atividadeService.GetAsync(id);

            if (atividade is null)
            {
                return NotFound();
            }
            
            return atividade;
        }

        [HttpPost]
        public async Task<IActionResult> Post(Atividade novaAtividade){
            await _atividadeService.CreateAsync(novaAtividade);

            return CreatedAtAction(nameof(Get), new { id= novaAtividade.Id},novaAtividade);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<ActionResult<Atividade>> Update(string id, Atividade atividadeAtualizada){
            var atividade = _atividadeService.GetAsync(id);
            if (atividade is null)
            {
                return NotFound();
            }

            atividadeAtualizada.Id = atividade.Id.ToString();

            await _atividadeService.UpdateAsync(id, atividadeAtualizada);
            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id){
            var atividade = _atividadeService.GetAsync(id);
            if (atividade is null)
            {
                return NotFound();
            }
            
            await _atividadeService.RemoveAsync(id);
            return NoContent();
        }
    }
}