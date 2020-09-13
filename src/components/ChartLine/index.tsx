import React, { useEffect, useRef, CanvasHTMLAttributes } from 'react';
import Chart from 'chart.js';

type CanvasProps = CanvasHTMLAttributes<HTMLCanvasElement>;

const ChartLine: React.FC<CanvasProps> = ({ ...rest }) => {
  const canvasElm = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx: any = canvasElm?.current?.getContext('2d');

    const gradientBg = ctx.createLinearGradient(0, 0, 0, 500);
    gradientBg.addColorStop(0, '#7C67FF');
    gradientBg.addColorStop(1, 'transparent');

    new Chart(ctx, {
      type: 'line',
      options: {
        responsive: true,
        animation: {
          easing: 'easeInOutBack',
        },
        // grid
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        // curvas
        elements: {
          line: {
            tension: 0,
          },
        },
        // legendas
        legend: {
          display: false,
          labels: {
            fontColor: '#fff',
            fontSize: 16,
          },
        },
      },
      data: {
        // colunas
        labels: [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro',
        ],
        datasets: [
          {
            borderWidth: 1,
            backgroundColor: gradientBg,
            borderColor: '#7C67FF',
            pointRadius: 5,
            pointBorderColor: '#fff',
            pointBackgroundColor: '#fff',
            pointHoverBorderColor: '#fff',
            pointHoverBorderWidth: 10,
            pointStyle: 'circle',
            label: 'R$',
            // dados das colunas
            data: [
              1500,
              200,
              7000,
              100,
              700,
              900,
              500,
              4000,
              500,
              4000,
              500,
              4000,
            ],
          },
        ],
      },
    });
  }, []);

  return (
    <canvas ref={canvasElm} {...rest}>
      Your browser does not support the canvas element.
    </canvas>
  );
};

export default ChartLine;
