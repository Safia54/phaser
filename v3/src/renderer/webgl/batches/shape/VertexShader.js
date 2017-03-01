module.exports = [
    'uniform mat4 u_view_matrix;',
    'attribute vec2 a_position;',
    'attribute vec4 a_color;',
    'attribute float a_alpha;',
    'attribute vec2 a_translate;',
    'attribute vec2 a_scale;',
    'attribute float a_rotation;',
    'varying vec4 v_color;',
    'varying float v_alpha;',
    'void main () {',
    '   float c = cos(a_rotation);',
    '   float s = sin(a_rotation);',
    '   vec2 t_position = vec2(a_position.x * c - a_position.y * s, a_position.x * s + a_position.y * c);',
    '   gl_Position = u_view_matrix * vec4(t_position * a_scale + a_translate, 1.0, 1.0);',
    '   v_color = a_color;',
    '   v_alpha = a_alpha;',
    '}'
].join('\n');
