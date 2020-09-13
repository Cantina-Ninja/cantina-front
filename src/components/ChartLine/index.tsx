import React, { useEffect, useRef, CanvasHTMLAttributes } from 'react';
import Chart from 'chart.js';

export interface CanvasProps extends CanvasHTMLAttributes<HTMLCanvasElement> {
  data: any;
}

const ChartLine: React.FC<CanvasProps> = ({ data, ...rest }) => {
  const canvasElm = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx: any = canvasElm?.current?.getContext('2d');

    const gradientBg = ctx.createLinearGradient(0, 0, 0, 600);
    gradientBg.addColorStop(0, '#7C67FF');
    gradientBg.addColorStop(1, 'transparent');

    // ctx.canvas.parentNode.style.height = '800px';
    // ctx.canvas.parentNode.style.width = '2000px';

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
            data,
          },
        ],
      },
    });
  }, []);

  return (
    <canvas ref={canvasElm} {...rest}>
      Seu browser não suporta Canvas
    </canvas>
  );
};

export default ChartLine;
