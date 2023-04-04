using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Boletim.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Boletim.services
{
    public class AtividadesServices
    {
        private readonly IMongoCollection<Atividade> _atividadeCollection;

        public AtividadesServices(IOptions<BoletimDatabaseSettings> boletimDatabaseSettings)
        {
            var mongoClient = new MongoClient(
            boletimDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                boletimDatabaseSettings.Value.DatabaseName);

            _atividadeCollection = mongoDatabase.GetCollection<Atividade>(
                boletimDatabaseSettings.Value.AtividadesCollectionName);
        }

        public async Task<List<Atividade>> GetAsync() =>
            await _atividadeCollection.Find(_ => true).ToListAsync();

        public async Task<Atividade?> GetAsync(string id) =>
            await _atividadeCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        
        public async Task CreateAsync(Atividade novaAtividade) =>
            await _atividadeCollection.InsertOneAsync(novaAtividade);
        
        public async Task UpdateAsync(string? id, Atividade atividadeAtualizada) =>
            await _atividadeCollection.ReplaceOneAsync(x => x.Id == id, atividadeAtualizada);

        public async Task RemoveAsync(string? id) =>
            await _atividadeCollection.DeleteOneAsync(x => x.Id == id);
    }
}