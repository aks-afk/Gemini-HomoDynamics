import React, { useEffect, useRef } from 'react';
import { select } from 'd3-selection';
import { forceSimulation, forceLink, forceManyBody, forceCenter } from 'd3-force';

interface VizNode {
    id: string;
    isCenter?: boolean;
    index?: number;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number | null;
    fy?: number | null;
}

const WhatIsHomodynamicsViz: React.FC = () => {
    const ref = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        const width = 300;
        const height = 250;
        const svg = select(ref.current)
            .attr('viewBox', `0 0 ${width} ${height}`)
            .html('');

        const nodes: VizNode[] = [
            { id: 'Homodynamics', isCenter: true },
            { id: 'Philosophy' },
            { id: 'Science' },
            { id: 'Consciousness' },
            { id: 'Systems' },
        ];

        const links = nodes.slice(1).map(node => ({ source: 'Homodynamics', target: node.id }));

        const simulation = forceSimulation(nodes)
            .force('link', forceLink(links).id(d => (d as VizNode).id).distance(90).strength(0.5))
            .force('charge', forceManyBody().strength(-200))
            .force('center', forceCenter(width / 2, height / 2));

        const link = svg.append('g').selectAll('line').data(links).join('line')
            .attr('stroke', '#C1C1C1').attr('stroke-width', 1.5);

        const node = svg.append('g').selectAll('g').data(nodes).join('g');

        node.append('circle')
            .attr('r', d => d.isCenter ? 30 : 10)
            .attr('fill', d => d.isCenter ? '#3A3A3A' : '#8A8A8A');

        node.append('text')
            .text(d => d.id)
            .attr('text-anchor', 'middle')
            .attr('dy', d => d.isCenter ? '.3em' : 30)
            .style('font-size', d => d.isCenter ? '11px' : '12px')
            .style('fill', d => d.isCenter ? '#FCFBF8' : '#5A5A5A');

        simulation.on('tick', () => {
            link
                // FIX: Cast to unknown first to satisfy TypeScript's type checker for d3 force link data.
                .attr('x1', d => (d.source as unknown as VizNode).x!)
                .attr('y1', d => (d.source as unknown as VizNode).y!)
                .attr('x2', d => (d.target as unknown as VizNode).x!)
                .attr('y2', d => (d.target as unknown as VizNode).y!);
            // FIX: Add non-null assertions as d3-force simulation ensures x and y are numbers.
            node.attr('transform', d => `translate(${d.x!}, ${d.y!})`);
        });

        return () => {
            simulation.stop();
        };
    }, []);

    return (
        <div>
            <h4 style={{ marginTop: 0, marginBottom: '1rem', color: '#3A3A3A', fontWeight: 'normal' }}>What is Homodynamics?</h4>
            <svg ref={ref} style={{ width: '100%', height: 'auto' }}></svg>
        </div>
    );
};

export default WhatIsHomodynamicsViz;