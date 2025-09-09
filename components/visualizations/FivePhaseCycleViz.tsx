import React, { useEffect, useRef } from 'react';
import { select } from 'd3-selection';

const FivePhaseCycleViz: React.FC = () => {
    const ref = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const width = 300;
        const height = 280;
        const svg = select(ref.current).attr('viewBox', `0 0 ${width} ${height}`).html('');
        const center = { x: width / 2, y: height / 2 - 10 };
        const radius = 100;

        const phases = [
            { name: "Wood", angle: -Math.PI / 2 },
            { name: "Fire", angle: -Math.PI / 2 + (2 * Math.PI) / 5 },
            { name: "Earth", angle: -Math.PI / 2 + (4 * Math.PI) / 5 },
            { name: "Metal", angle: -Math.PI / 2 + (6 * Math.PI) / 5 },
            { name: "Water", angle: -Math.PI / 2 + (8 * Math.PI) / 5 },
        ];

        const points = phases.map(p => ({
            x: center.x + radius * Math.cos(p.angle),
            y: center.y + radius * Math.sin(p.angle),
        }));

        svg.append('defs').append('marker')
            .attr('id', 'arrow-fivephase')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 8)
            .attr('refY', 0)
            .attr('markerWidth', 6)
            .attr('markerHeight', 6)
            .attr('orient', 'auto')
            .append('path')
            .attr('d', 'M0,-5L10,0L0,5')
            .attr('fill', '#3A3A3A');

        // Generating Cycle Path
        const lineGenerator = (p1: any, p2: any) => {
            const dx = p2.x - p1.x, dy = p2.y - p1.y;
            const gamma = Math.atan2(dy, dx);
            const r = 25; // node radius
            const x1 = p1.x + r * Math.cos(gamma);
            const y1 = p1.y + r * Math.sin(gamma);
            const x2 = p2.x - r * Math.cos(gamma);
            const y2 = p2.y - r * Math.sin(gamma);
            return `M${x1},${y1}L${x2},${y2}`;
        };
        
        let dPath = '';
        for (let i = 0; i < points.length; i++) {
             const p1 = points[i];
             const p2 = points[(i+1)%points.length];
             const dx = p2.x - p1.x;
             const dy = p2.y - p1.y;
             const dr = Math.sqrt(dx*dx + dy*dy);
             const sweep = 0; // 0 for straight line, 1 for arc
             dPath += ` M ${p1.x} ${p1.y} A ${dr} ${dr} 0 0 ${sweep} ${p2.x} ${p2.y}`;
        }

        const path = svg.append('path').attr('id', 'cyclePath').attr('fill', 'none')
          .attr('d', `M${points[0].x},${points[0].y} A${radius},${radius} 0 0,1 ${points[1].x},${points[1].y} A${radius},${radius} 0 0,1 ${points[2].x},${points[2].y} A${radius},${radius} 0 0,1 ${points[3].x},${points[3].y} A${radius},${radius} 0 0,1 ${points[4].x},${points[4].y} A${radius},${radius} 0 0,1 ${points[0].x},${points[0].y}`);

        
        const paths = svg.selectAll('.cycle-edge')
            .data(points)
            .enter()
            .append('path')
            .attr('class', 'cycle-edge')
            .attr('d', (d, i) => lineGenerator(points[i], points[(i + 1) % points.length]))
            .attr('stroke', '#C1C1C1')
            .attr('stroke-width', 1.5)
            .attr('marker-end', 'url(#arrow-fivephase)');
        
        const tracer = svg.append('circle')
            .attr('r', 4)
            .attr('fill', '#3A3A3A');
            
        tracer.append('animateMotion')
            .attr('dur', '8s')
            .attr('repeatCount', 'indefinite')
            .append('mpath')
            .attr('href', '#cyclePath');

        const nodes = svg.selectAll('g.node')
            .data(phases)
            .join('g')
            .attr('class', 'node')
            .attr('transform', (d, i) => `translate(${points[i].x}, ${points[i].y})`);
        
        nodes.append('circle').attr('r', 25).attr('fill', '#FCFBF8').attr('stroke', '#8A8A8A');
        nodes.append('text').text(d => d.name).attr('text-anchor', 'middle').attr('dy', '.3em').attr('font-size', '12px').attr('fill', '#3A3A3A');
        
    }, []);

    return (
        <div>
            <h4 style={{ marginTop: 0, marginBottom: '1rem', color: '#3A3A3A', fontWeight: 'normal' }}>The Five Phases (Wu Xing)</h4>
            <svg ref={ref}></svg>
             <p style={{ fontSize: '0.9rem', color: '#5A5A5A', lineHeight: 1.5, textAlign: 'center' }}>
                The generating cycle of Qì, where each phase gives rise to the next in an endless transformation.
            </p>
        </div>
    );
};

export default FivePhaseCycleViz;