'use client';

import { useEffect, useState } from 'react';
import { TrophyIcon, UserIcon } from '@heroicons/react/24/solid';

interface Player {
  rank: number;
  nivel: number;
  exp: number;
  jogador: string;
  classe: string;
  cla: string;
}

interface LeaderboardTableProps {
  title: string;
  endpoint: string;
}

export default function LeaderboardTable({ title, endpoint }: LeaderboardTableProps) {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.error('Erro ao carregar ranking:', err));
  }, [endpoint]);

  if (!players.length) return null;

  const podium = players.slice(0, 3);
  const highlights = players.slice(3, 5);
  const rest = players.slice(5);

  return (
    <section className='bg-[var(--color-dark-blue)] py-20 px-6 text-white' id='leaderboard'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold font-sans mb-10 text-[var(--color-gold)]'>{title}</h2>

        {/* Pódio */}
        <div className='flex justify-center items-end gap-4 mb-12'>
          {[
            { position: 2, size: 'h-36', color: 'bg-[var(--color-light-blue)]' },
            { position: 1, size: 'h-44', color: 'bg-[var(--color-gold)]' },
            { position: 3, size: 'h-32', color: 'bg-[var(--color-cyan)]' },
          ].map(({ position, size, color }) => {
            const player = podium.find((p) => p.rank === position);
            return player ? (
              <div key={player.rank} className='flex flex-col items-center'>
                <div
                  className={`w-24 ${size} ${color} rounded-t-lg flex items-center justify-center shadow-lg flex-col`}
                >
                  <span>{player.rank}°</span>
                  <TrophyIcon className='w-8 h-8 text-white' />
                </div>
                <div className='mt-2 text-sm font-display'>{player.jogador}</div>
                <div className='text-xs text-gray-300'>{player.classe}</div>
              </div>
            ) : null;
          })}
        </div>

        {/* Destaque 4º e 5º */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10'>
          {highlights.map((player) => (
            <div key={player.rank} className='bg-white/5 rounded-lg px-6 py-4 text-left shadow'>
              <div className='flex justify-between items-center font-display text-lg'>
                <span className='text-[var(--color-gold)]'>#{player.rank}</span>
                <span>{player.jogador}</span>
              </div>
              <div className='text-xs text-gray-300 mt-1 font-sans'>
                {player.classe} - Clã: <span className='font-bold'>{player.cla}</span>
              </div>
              <div className='text-xs text-gray-400 font-display'>
                Nível: {player.nivel} • EXP: {player.exp.toLocaleString()}
              </div>
            </div>
          ))}
        </div>

        {/* Tabela restante */}
        <div className='overflow-x-auto rounded-lg'>
          <table className='min-w-full bg-white/5 text-sm font-display'>
            <thead className='text-[var(--color-gold)] text-left uppercase tracking-wide'>
              <tr>
                <th className='p-3'>#</th>
                <th className='p-3'>Jogador</th>
                <th className='p-3'>Classe</th>
                <th className='p-3'>Clã</th>
                <th className='p-3'>Nível</th>
                <th className='p-3'>EXP</th>
              </tr>
            </thead>
            <tbody className='text-white'>
              {rest.map((player) => (
                <tr key={player.rank} className='border-t border-white/10 hover:bg-white/10'>
                  <td className='p-3'>{player.rank}</td>
                  <td className='p-3 flex items-center gap-2'>
                    <UserIcon className='w-4 h-4 text-white/70' />
                    {player.jogador}
                  </td>
                  <td className='p-3'>{player.classe}</td>
                  <td className='p-3'>{player.cla}</td>
                  <td className='p-3'>{player.nivel}</td>
                  <td className='p-3'>{player.exp.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
